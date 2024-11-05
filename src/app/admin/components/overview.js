export async function Overview({ sideBoxChildren, mainBoxChildren }) {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-1/6">{sideBoxChildren}</div>
      <div className="w-full">{mainBoxChildren}</div>
    </div>
  );
}
