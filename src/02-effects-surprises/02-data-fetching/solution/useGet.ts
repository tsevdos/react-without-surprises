import { useEffect, useState } from "react";

type RequestResult<TData> =
  | { status: "pending"; data: undefined; error: undefined }
  | { status: "error"; data: undefined; error: unknown }
  | { status: "success"; data: TData; error: undefined };

type TrackedRequest<TData, TName> = {
  name: TName | null;
  result: RequestResult<TData>;
};

const pendingResult = { status: "pending", data: undefined, error: undefined } as const;

export const useGet = <TName, TData>(
  getPromise: (name: TName, signal: AbortSignal) => Promise<TData>,
  name: TName | null,
): RequestResult<TData> => {
  const [trackedRequest, setTrackedRequest] = useState<TrackedRequest<TData, TName>>({
    name: null,
    result: pendingResult,
  });

  useEffect(() => {
    if (name === null) {
      setTrackedRequest({ name: null, result: pendingResult });
      return;
    }

    const controller = new AbortController();
    setTrackedRequest({ name, result: pendingResult });

    const load = async () => {
      try {
        const data = await getPromise(name, controller.signal);
        if (!controller.signal.aborted) {
          setTrackedRequest({ name, result: { status: "success", data, error: undefined } });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setTrackedRequest({ name, result: { status: "error", data: undefined, error } });
        }
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [getPromise, name]);

  return trackedRequest.name === name ? trackedRequest.result : pendingResult;
};
