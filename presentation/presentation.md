---
marp: true
theme: default
footer: "[tsevdos.me](https://tsevdos.me/) · [@tsevdos](https://twitter.com/tsevdos)"
paginate: true
---

<!-- ![bg right:30%](https://avatars1.githubusercontent.com/u/175707) -->

# React Without Surprises: <br />Building Predictable Applications

---

# 📋 Agenda

- State Management Surprises
- Effects Surprises
- Component Design Surprises
- Rendering & Performance Surprises
- Data Flow & Architecture Surprises

<!-- OLD
- Prop Drilling
- Complex components
- Hooks anti-patterns
- Duplication (when to avoid it, and when not)
- You might not need useEffect
- And many more...
-->

---

# 🏠 Format

For each topic:

1. See the **bad version** running — predict what happens
2. Discuss **why** it happens (tie back to React's mental model)
3. **Refactor** it together
4. Apply what we learned on **exercises!**

<!-- 1. **Spot it** — a rule of thumb / smell to notice
2. **Understand it** — what's actually wrong, and why
3. **Fix it** — the refactor, and why it's better -->

##### \* Feel free to interrupt me at any time for questions or relevant comments

---

# 🤖 All code examples are:

- Real-world (realistic) examples
- Fully functional
- Production ready

---

# State Management Surprises

---

# State Management Surprises

## 🎬 Live demo: Todo app

---

# 🔍 Spot the problem

- Multiple `useState` calls for values that are fully **calculable** from other state or props
- Multiple `useEffect` that just keep the state "in sync"

> Ask❓ "Can I compute this from what I already have?" — if yes, don't store it

---

# ❌ Why is it a problem

- **Two sources of truth** — stored value can drift from the calculated one
- **Extra renders** — every derived state update triggers a re-render
- **Dependency arrays** to maintain and keep correct by hand
- **More code** to read, test, and maintain

---

# ✅ The Fix

- **Compute / derive** the value directly in the render body
- Wrap in **`useMemo`** only if the calculation is genuinely expensive

---

# ✅ Why this is better

- **Single source of truth** — derived values are always correct by construction
- **Impossible** to have out-of-sync state
- **Zero extra renders** — no state cascade
- **Zero dependency arrays** to maintain
- **Better performance** (fewer re-renders)
- **Less code** — easier to understand, easier to maintain, simplifies debugging

---

# 🎯 Rule of thumb

> If you can calculate it, don't store it.

---

# State Management Surprises

## 🎬 Live demo: Profile form

---

# State Management Surprises

## 🚀 Exercise: User Cart

---

# State Management Surprises

## 🎬 Live demo: App Layout

---

# 🔍 Spot the problem

- 🕳️ Prop drilling!
- Passing props through **multiple component layers**
- Intermediate components don't use the props — just forward them
- Creates tight coupling and maintenance nightmares


```
App → Header → HeaderActions → UserInfo → Profile
      ↓ user    ↓ user        ↓ user      ↓ user
```

> Ask❓ "Do all these intermediate components use the specific props?" — if no, use a global store

---

# ❌ Why is it a problem

- Intermediate components become coupled to data they neither own nor use
- Adding or renaming a prop means updating every pass-through component
- Component APIs grow with details unrelated to their actual responsibilities
- The connection between the data's owner and its consumer becomes harder to follow
- This is mainly a **maintainability** problem; prop drilling alone does not necessarily hurt performance

---


# ✅ The Fix

- Put genuinely shared data in **global state** (Context API or global store)
- Read it where it is needed with a custom hook or store selector
- Keep props for data that belongs to a nearby component relationship

---

# ✅ Why this is better

- Intermediate components no longer carry data they don't use
- Consumers declare what shared data they depend on
- Shared state has a clear owner and is easier to change


---

# 🎯 Rule of thumb

> Use props for local, explicit data flow; use Context or a store when distant parts of the tree need the same shared state.

---

# 🔑 Key takeaways

1. **Derive, don't store** — if it can be calculated, don't `useState` it
2. **Prop drilling is a code smell** — fix it early before it spreads

---

# Effects Surprises

---

# Effects Surprises

## 🎬 Live demo: Message board

---

# 🔍 Spot the problem

- A user action happens, but we handle the business logic and state updates in effects
- Often, we split the business logic and state updates between two places: the event handler and the `useEffect`
- This makes the component inaccessible, and it's unclear how it works and how the user can interact with it (form submission, click, etc.)

---

# ❌ Why is it a problem

- The effect runs **after** the interaction, so the cause and the result live in different places
- The flow becomes indirect: event → state update → re-render → effect → more state updates
- Extra renders, and effects that can re-run for unrelated reasons (dependency changes, Strict Mode)
- The event handler, if there is one, tells only half the story

---

# ✅ The Fix

- Move the business logic and state updates into the event handler (`onClick`, `onSubmit`, etc.)
- Use semantic controls for interactions: `<button>` and `<form>`, not clickable `<div>`s
- Keep effects for synchronizing with the outside world (network, subscriptions, timers), not for reacting to user actions

---

# ✅ Why this is better


- One place to look: the handler shows exactly what an interaction does
- Less state and fewer effects (and dependency arrays) to keep track of
- Fewer extra renders and no surprise re-runs
- Accessibility for free: native keyboard support, focus handling, and screen reader semantics

---

# 🎯 Rule of thumb

> Events for what users do, effects for what the world needs.

---

# Effects Surprises

## 🎬 Live demo: Data fetching

---

# 🔍 Spot the problem

- An HTTP request is a side effect
- Fetching in `useEffect` means hand-writing the same boilerplate every time and quickly becomes complicated
- It gets more complicated when you add loading and error states, abort signals, and so on
- And you still don't get retries, mutations, revalidation, or client-side caching

---

# ❌ Why is it a problem

- The same fetch logic can make components difficult to maintain and reason about
- Easy to get wrong: stale data, out-of-order responses, double requests (Strict Mode)
- Every new feature (retries, mutations, revalidation, caching) adds even more code and complexity

---

# ✅ The Fix

- Extract the fetch logic into a custom hook, so components stop repeating it
- Even better, use a query library such as **TanStack Query** to manage API requests
- This makes components easier to maintain and reason about

---

# ✅ Why this is better

- The library tracks loading, errors, and data states, with no boilerplate
- Caching, request deduplication, retries, and revalidation are built in
- Stale and out-of-order responses are handled for you
- The component can focus on its business logic and remains easier to maintain

---

# 🎯 Rule of thumb

> Don't hand-roll data fetching in effects. Use a query library, or server components if you can.

---

# Effects Surprises

## 🚀 Exercise: Ticket desk

---

# 🙏 That's all folks

### Questions / Discussions?
