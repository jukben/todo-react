import { ITodo } from "../types/todo";

/**

1. Switch display to Comfortable
2. Components 
  - Hide components (filter out Mui)
  - Open in editor URL
  - Show that you can edit props directly
  - Explain how ID of hooks works in context of components
3. Profiler
  - turn highlight updates on to see it's not working as expected
  - Show that it's not working as expected (everything is re-rendered)
  - Turn profiler (record why each component is re-rendered) to see it
*/

export const mockTodos: ITodo[] = [
  {
    id: -1,
    name: "💤 Check that no one is sleeping yet",
    completed: false,
  },
  {
    id: -1,
    name: "Explore ⚛️ Profiler",
    completed: false,
  },
  {
    id: -1,
    name: "Explore ⚛️ Components",
    completed: false,
  },
].map((todo, i) => ({ ...todo, id: i }));
