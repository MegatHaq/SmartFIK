export async function Overview({ sideBoxChildren, mainBoxChildren }) {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-1/6 md:block hidden">{sideBoxChildren}</div>
      <div className="w-full">{mainBoxChildren}</div>
    </div>
  );
}
