import "./App.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <Card className="border border-neutral-200 rounded round-xl">
          <CardHeader>
            <img src="https://via.placeholder.com/400x200" alt="Placeholder Card Image 1" className="w-full h-auto rounded-t-xl" />
          </CardHeader>
          <CardContent>Content 1</CardContent>
          <CardFooter>Footer 1</CardFooter>
        </Card>
        <Card className="border border-neutral-200 rounded round-xl">
          <CardHeader>
            <img src="https://via.placeholder.com/400x200" alt="Placeholder Card Image 2" className="w-full h-auto rounded-t-xl" />
          </CardHeader>
          <CardContent>Content 2</CardContent>
          <CardFooter>Footer 2</CardFooter>
        </Card>
        <Card className="border border-neutral-200 rounded round-xl">
          <CardHeader>
            <img src="https://via.placeholder.com/400x200" alt="Placeholder Card Image 3" className="w-full h-auto rounded-t-xl" />
          </CardHeader>
          <CardContent>Content 3</CardContent>
          <CardFooter>Footer 3</CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;
