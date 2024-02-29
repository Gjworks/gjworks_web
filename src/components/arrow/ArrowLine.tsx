"use clinet";

const ArrowLine = (props) => {
  const tempStyle = {
    display: "inline-block",
    width: "100px",
    height: "100px",
    boder: "1px solid black",
    background: "orange",
    before: {
      position: "absolute",
    },
  };

  return (
    <>
      <div
        className="h-[2px] w-full border-rose-500 bg-rose-500 after:absolute after:left-0"
        style={tempStyle}
      ></div>
    </>
  );
};

export default ArrowLine;
