type TabsContentProps = {
  title: string;
  content: string;
  isVisible: boolean;
};

const TabsContent = ({ title, content, isVisible }: TabsContentProps) => (
  <article className={`tab-content ${isVisible ? "is-visible" : ""}`}>
    <h2>{title}</h2>
    <p>{content}</p>
  </article>
);

export default TabsContent;
