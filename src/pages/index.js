import Card from "@/components/Card";
import server from "../config/serverHelper";

export const getStaticProps = async () => {
  let res = await fetch(`${server()}/api/cards`);
  const cards = res.status === 200 ? await res.json() : null;
  return {
    props: {
      cards,
    },
  };
};

export default function Home({ cards }) {
  return cards !== null ? (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} title={card.title} content={card.content} />
      ))}
    </div>
  ) : null;
}
