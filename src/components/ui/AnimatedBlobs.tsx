import "./AnimatedBlobs.scss";

const AnimatedBlobs = () => {
  return (
    <div className="blob-container">
      {/* Blob 1 */}
      <div className="blob-wrapper blob-1">
        <div className="blob" />
      </div>

      {/* Blob 2 */}
      <div className="blob-wrapper blob-2">
        <div className="blob" />
      </div>

      {/* Blob 3 */}
      <div className="blob-wrapper blob-3">
        <div className="blob" />
      </div>

      {/* Blob 4 */}
      <div className="blob-wrapper blob-4">
        <div className="blob" />
      </div>
    </div>
  );
};

export default AnimatedBlobs;
