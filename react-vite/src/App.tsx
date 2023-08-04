import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            cols={20}
          ></textarea>
        </div>
      </div>
    </>
  );
}
