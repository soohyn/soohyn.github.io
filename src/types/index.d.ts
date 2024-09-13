import { TAG } from "./lib";

interface Post {
  id: string;
  created_at: number;
  title: string;
  description: string;
  contents: string;
  tags: (typeof TAG)[keyof typeof TAG][];
}
