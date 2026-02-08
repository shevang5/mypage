export default function AboutWindow() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="window w-[90%] max-w-[750px] min-h-[500px] m-8">
        <div className="title-bar py-2">
          <div className="title-bar-text text-xl py-1">About Me</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body space-y-4">
          <p className="text-lg">
            I'm a full-stack web developer and web designer with hands-on experience in building modern websites and full-stack web applications.
          </p>
          <p className="text-lg">
            I started my journey with engineering coursework, which helped me develop strong problem-solving skills. Along with development, I work with <strong>Photoshop</strong> to design clean interfaces - not just functional code.
          </p>
          <p className="text-lg">
            <strong>My focus:</strong> Build websites that look professional, work smoothly, and scale easily.
          </p>
        </div>
      </div>
    </div>
  );
}
