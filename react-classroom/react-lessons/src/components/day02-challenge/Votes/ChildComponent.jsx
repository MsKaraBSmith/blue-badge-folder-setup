// function ChildComponent(props) {
//     //Final Output: Abe Lincoln had a total vote count of 139033
//     return (
//         <div>
//             <p>{props.votes.name} had a total vote count of {props.votes.count}. {props.phrase}</p>
//         </div>
//     );
// };

// Different way to do it:
function ChildComponent(props) {
    const { name, count } = props.votes
    //Final Output: Abe Lincoln had a total vote count of 139033
    return (
        <div>
            <p>{name} had a total vote count of {count}</p>
        </div>
    );
};

export default ChildComponent;

