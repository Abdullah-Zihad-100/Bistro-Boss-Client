import img from "../assets/home/chef-service.jpg"; // Correctly imported image

const SectionHome1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, height: 400 }} // Use url() for backgroundImage
      className="bg-fixed bg-cover bg-center w-5/6 mx-auto my-10" // Ensure proper background covering
    >
      <div className="relative w-5/6 mx-auto">
        <div className="text-center bg-white absolute top-28 md:p-10 p-2">
          <h1 className="text-4xl my-2">Bistro Boss</h1>
          <p className="font-semibold text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SectionHome1;
