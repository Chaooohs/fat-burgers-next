import { getData } from "../actions/requests";

export default async function Reviews() {
  const reviews = await getData();

  return (
    <div>
      <h1>Reviews</h1>
      <div className="reviews">
        {reviews.length &&
          reviews.slice(0, 20).map((el) => {
            return (
              <div key={el.id} className="review">
                {el.id} {`${el.body.slice(0, 90)}...`}
              </div>
            );
          })}
      </div>
    </div>
  );
}
