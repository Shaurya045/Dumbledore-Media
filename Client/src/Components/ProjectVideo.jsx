import { useState, useRef, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  X,
  ChevronUp,
  ChevronDown,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample videos from a royalty-free source
const videos = [
  {
    id: "1",
    url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://picsum.photos/id/1015/354/630",
    title: "Nature Walk",
    username: "naturelover",
    avatar: "https://i.pravatar.cc/150?img=1",
    likes: 1234,
    comments: 89,
    description: "Enjoy the calmness of nature 🌿 #nature #peaceful",
  },
  {
    id: "2",
    url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    thumbnail: "https://picsum.photos/id/1016/354/630",
    title: "City Timelapse",
    username: "urbanexplorer",
    avatar: "https://i.pravatar.cc/150?img=2",
    likes: 2541,
    comments: 132,
    description: "Fast-moving city life 🌆 #cityscape #timelapse",
  },
  {
    id: "3",
    url: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    thumbnail: "https://picsum.photos/id/1018/354/630",
    title: "Coffee Pouring",
    username: "coffeelover",
    avatar: "https://i.pravatar.cc/150?img=3",
    likes: 891,
    comments: 45,
    description: "Morning coffee vibes ☕ #coffee #morningroutine",
  },
  {
    id: "4",
    url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    thumbnail: "https://picsum.photos/id/1020/354/630",
    title: "Sunset Over Mountains",
    username: "sunsetcatcher",
    avatar: "https://i.pravatar.cc/150?img=4",
    likes: 3782,
    comments: 167,
    description: "Golden hour beauty 🌄 #sunset #mountains",
  },
  {
    id: "5",
    url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    thumbnail: "https://picsum.photos/id/1021/354/630",
    title: "Street Performance",
    username: "streetartist",
    avatar: "https://i.pravatar.cc/150?img=5",
    likes: 1567,
    comments: 92,
    description: "Live street music 🎸🎶 #music #streetperformance",
  },
  {
    id: "6",
    url: "https://samplelib.com/lib/preview/mp4/sample-40s.mp4",
    thumbnail: "https://picsum.photos/id/1022/354/630",
    title: "Drone Over Ocean",
    username: "dronepilot",
    avatar: "https://i.pravatar.cc/150?img=6",
    likes: 2198,
    comments: 113,
    description: "Flying over the sea 🌊 #drone #oceanview",
  },
];

function ProjectVideo() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState({});
  const videoRef = useRef(null);
  const touchStartY = useRef(null);

  const handleVideoClick = (video, index) => {
    setSelectedVideo(video);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedVideo(videos[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedVideo(videos[currentIndex - 1]);
    }
  };

  const toggleLike = (videoId) => {
    setIsLiked((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
  };

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartY.current) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrevious();
        }
        touchStartY.current = null;
      }
    };

    if (selectedVideo) {
      document.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [selectedVideo]); // Removed currentIndex from dependencies

  return (
    <div className="relative w-full">
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-[50px] mb-[80px] px-[30px] md:px-[50px] ">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative aspect-[9/16] cursor-pointer rounded-lg overflow-hidden group"
            onClick={() => handleVideoClick(video, index)}
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            {/* Play Icon */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Play className="w-12 h-12 text-white opacity-70" />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Reels View */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex md:flex-col absolute right-4 top-1/2 -translate-y-1/2 space-y-4 z-10">
            <button
              onClick={handlePrevious}
              className={cn(
                "p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors",
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "text-white"
              )}
              disabled={currentIndex === 0}
            >
              <ChevronUp className="w-8 h-8 text-black bg-white rounded-full p-1" />
            </button>
            <button
              onClick={handleNext}
              className={cn(
                "p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors",
                currentIndex === videos.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "text-white"
              )}
              disabled={currentIndex === videos.length - 1}
            >
              <ChevronDown className="w-8 h-8 text-black bg-white rounded-full p-1" />
            </button>
          </div>

          {/* Video Player */}
          <div className="w-full h-full md:w-[405px] md:h-[720px] relative bg-black">
            <video
              ref={videoRef}
              src={selectedVideo.url}
              autoPlay
              loop
              playsInline
              className="w-full h-full object-contain"
              onClick={(e) => {
                const video = e.currentTarget;
                video.paused ? video.play() : video.pause();
              }}
            />

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={selectedVideo.avatar || "/placeholder.svg"}
                  alt={selectedVideo.username}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <span className="text-white font-semibold">
                  {selectedVideo.username}
                </span>
              </div>
              <p className="text-white mb-4">{selectedVideo.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6">
              <button
                onClick={() => toggleLike(selectedVideo.id)}
                className="text-white flex flex-col items-center gap-1"
              >
                <div className="p-2 rounded-full bg-black/50">
                  <Heart
                    className={cn(
                      "w-6 h-6 transition-colors",
                      isLiked[selectedVideo.id]
                        ? "fill-red-500 stroke-red-500"
                        : ""
                    )}
                  />
                </div>
                <span className="text-sm">{selectedVideo.likes}</span>
              </button>
              <button className="text-white flex flex-col items-center gap-1">
                <div className="p-2 rounded-full bg-black/50">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-sm">{selectedVideo.comments}</span>
              </button>
              <button className="text-white flex flex-col items-center gap-1">
                <div className="p-2 rounded-full bg-black/50">
                  <Share2 className="w-6 h-6" />
                </div>
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectVideo;
