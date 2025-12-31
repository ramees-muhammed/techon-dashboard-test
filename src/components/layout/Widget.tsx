import "./Widget.scss";

const Widget = ({ children, title }: { children: any; title?: string }) => {
  return (
    <div className="widget">
      {title && (
        <div className="widget_head">
          <h1>{title}</h1>
          <img width={"32px"} height={"32px"} src="/arraw.png" alt="" />
        </div>
      )}
      <div style={{height:"90%" }}>{children}</div>
    </div>
  );
};

export default Widget;
