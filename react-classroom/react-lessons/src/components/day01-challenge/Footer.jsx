function Footer(){
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return(
        <div>
            <p>&copy; Eleven Fifty {getCurrentYear()}</p>
        </div>
    );
}

export default Footer;