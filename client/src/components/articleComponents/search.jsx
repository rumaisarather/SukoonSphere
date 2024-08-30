import { Form, Link, useLoaderData } from "react-router-dom";

const search = () => {
  const { category } = useLoaderData()
  console.log(category)
  return (
    // search by title,filter  by category, range by readingtime,filter by newest,oldest,
    <Form className="grid gap-4 grid-cols-2">
      <label className="col-span-2 input input-bordered bg-transparent flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          name="search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <select
        name="category"
        className="select bg-transparent select-bordered w-full max-w-xs"
      >
        <option disabled selected>
          category
        </option>
        {category.map((tag)=>{
        return <option key={tag}>{tag}</option>;
        })}
      </select>
      <select
        name="sort_by"
        className="select bg-transparent select-bordered w-full max-w-xs"
      >
        <option disabled selected>
          sort by
        </option>
        <option>newest</option>
        <option>oldest</option>
        <option>most viewed</option>
      </select>
      <button type="submit" className="btn btn-outline btn-primary text-white">
        search
      </button>
      <Link to="/articles" className="btn btn-outline btn-[red]">reset</Link>
    </Form>
  );
}
export default search