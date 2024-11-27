
const Myname = () => {
    const infos = {"name": "Zachary", "age": 21};
    return (
        <div>
            <h1>My name is {infos.name}</h1>
            <h2>I am {infos.age}</h2>
        </div>
    )
};
export default Myname;