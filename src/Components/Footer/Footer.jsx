export const Footer = () => {
    return (
        <footer className="my-6 flex flex-row px-4 place-content-between">
            <div className="flex flex-row">
                <ul className="mr-4">
                    <li className="font-bold">WALLYWOOD</li>
                    <li>Øster Uttrupvej 1</li>
                    <li>9000 Aalborg</li>
                </ul>
                <ul>
                    <li>CVR: 12345678</li>
                    <li>kontakt@wallywood.dk</li>
                    <li>+45 12345678</li>
                </ul>
            </div>
            <ul className="flex flex-row">
                <li><i class="fa-brands fa-pinterest"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-facebook-f"></i></li>
                <li><i class="fa-brands fa-x-twitter"></i></li>
            </ul>
        </footer>
    );
};