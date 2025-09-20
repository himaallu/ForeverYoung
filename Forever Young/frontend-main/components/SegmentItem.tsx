import React from "react";
import { SpeechSegment } from "@speechly/react-client";

interface Props {
  segment: SpeechSegment;
}

export const SegmentItem: React.FC<Props> = ({ segment }) => {
  const text = segment.words.map((w) => w.value).join(" ");

  const { intent, entities } = segment;
  const entitiesList = entities.map((e) => `${e.value} (${e.type})`).join(", ");

  return (
    <div className="segment">
      <div className="segment-content">
        <div>{text}</div>
      </div>
    </div>
  );
};
