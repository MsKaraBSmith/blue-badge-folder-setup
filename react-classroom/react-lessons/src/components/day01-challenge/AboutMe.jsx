function AboutMe(){
    const style = {
        header: { color: "blue" },
    };
    return (<div>
        <h1 style={style.header}/*style={{ color: 'red' }}*/>Kara Smith</h1>
        <p>I grew up all over Northern Indiana, mostly South Bend.</p>
    <ul style={{listStyleType: "none"}}>
            <li>I have visited Ireland.</li>
            <li>I have visited Banff.</li>
            <li>I have visited Lake Junaluska.</li>
        </ul>
    </div>
    );
}

export default AboutMe;