import { Post } from "@/types";
import { TAG } from ".";

export const dummy: Post[] = [
  {
    id: "<id>",
    created_at: +new Date(),
    title: "이것은 제목입니다 한 줄만 보여집니다. 한 줄 넘치는 테스트",
    description:
      "이것은 설명글입니다. 이 글에 대해서 짧게 적습니다. 한 줄에서 두 줄까지만 허용하도록 합니다.",
    contents: "<h1>테스트 컨텐츠</h1>",
    tags: [TAG.REACT, TAG.TYPESCRIPT],
    thumbnail: "",
  },
];
