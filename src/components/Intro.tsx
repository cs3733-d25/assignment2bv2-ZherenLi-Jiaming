interface IntroProps{
    name1:string;
    name2:string;
}

const Intro = ({name1,name2}:IntroProps) => {
    return (
        <p>
        Hello! We are {name1} and {name2}, both passionate about technology and creativity.
    </p>);
};

export default Intro;