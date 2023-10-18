import useBearStore from '@/store/bear';

function Home() {
  const { bears, increase } = useBearStore();
  return (
    <>
      <h1>{bears}</h1>
      <button onClick={() => increase(bears + 1)}>+</button>
    </>
  );
}

export default Home;
