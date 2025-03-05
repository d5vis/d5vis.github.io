import type { PluginAPI } from "tailwindcss/types/config";

const animationPlayStatePlugin = ({ addUtilities }: PluginAPI) => {
  addUtilities({
    ".animation-paused": {
      "animation-play-state": "paused",
    },
    ".animation-running": {
      "animation-play-state": "running",
    },
  });
};

export default animationPlayStatePlugin;
