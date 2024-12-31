const Page = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-[#f6f6f6] mt-3 px-4">
      <form className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-center font-semibold">
          Please Fill Out Your Information
        </h2>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <textarea
          rows={4}
          cols={40}
          className=" border border-[#00b6ff] input-bordered input-info w-full max-w-xs"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;