import { getParkInfo } from "./database.js";

const park = getParkInfo()

//park logo and park name in the header

export const renderHeader = () => {
    return `
    <header>
        <div class="header-grouping">
            <img src="${park.logo}" alt="${park.name} logo" class="logo"/>
            <h1>${park.name}</h1>
        </div>
    </header>
    `;
}

//phone number, email address, and street address in footer

export const renderFooter = () => {
    return `
    <footer>
        <div class="footer-grouping">
            <p>CONTACT US!</p>
            <p>Phone: <a href="call:${park.phoneNumber}">${park.phoneNumber}</a></p>
            <p>Email: <a href="mail:${park.email}">${park.email}</a></p>
            <p>Address: ${park.address}</p>
        </div>
        <div class="copyright">
            <p>${park.name}. All rights reserved.</p>
    </footer>
    `;
}