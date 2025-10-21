const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 650) {
    header.style.backdropFilter = "blur(10px)";
    header.style.backgroundColor = "rgba(0,0,0,0.4)";
    header.style.paddingBlock = "10px";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "blur(0px)";
  }
});

const newCollection = [
  {
    rateTag: "Best sale",
    image: "./images/sofa (1).png",
    name: "Avondale wood leg sofa",
    price: 180.0,
  },
  {
    rateTag: "Top rated",
    image: "./images/sofa (2).png",
    name: "Avondale wood leg sofa",
    price: 150.0,
  },
  {
    rateTag: "Best price",
    image: "./images/sofa (3).png",
    name: "Avondale wood leg sofa",
    price: 200.0,
  },
  {
    rateTag: "Top rated",
    image: "./images/sofa (4).png",
    name: "Avondale wood leg sofa",
    price: 70.0,
  },
  {
    rateTag: "Best price",
    image: "./images/sofa (5).png",
    name: "Avondale wood leg sofa",
    price: 180.0,
  },
  {
    rateTag: "Best sale",
    image: "./images/sofa (6).png",
    name: "Avondale wood leg sofa",
    price: 3280.0,
  },
];
let newCollectionHtml1 = "";
let newCollectionHtml2 = "";
newCollection.slice(0, 3).forEach((collection) => {
  newCollectionHtml1 += `<div class="new-collection-item">
                    <p class="tag">${collection.rateTag}</p>
                    <img class="item-image" src="${collection.image}" alt="">
                    <div class="name-price-svg">
                        <div class="name-price">
                            <p class="item-name">${collection.name}</p>
                            <p class="item-price">$${collection.price}</p>
                        </div>
                        <div class="shop-svg">
                           <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4308 12L18.4408 16C17.6168 18.913 16.9408 19.748 15.4698 19.946C15.1413 19.9859 14.8106 20.0039 14.4798 20H10.5198C10.1889 20.0039 9.85819 19.9859 9.52975 19.946C8.06375 19.746 7.38275 18.913 6.55875 16L5.56875 12C5.07575 9.014 7.32175 8.009 9.49975 8V7.125C9.46572 5.43382 10.8086 4.03499 12.4998 4C14.1909 4.03499 15.5338 5.43382 15.4998 7.125V8C17.6778 8.009 19.9228 9.013 19.4308 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.4998 8.75C15.914 8.75 16.2498 8.41421 16.2498 8C16.2498 7.58579 15.914 7.25 15.4998 7.25V8.75ZM9.49976 7.25C9.08554 7.25 8.74976 7.58579 8.74976 8C8.74976 8.41421 9.08554 8.75 9.49976 8.75V7.25ZM16.2498 10C16.2498 9.58579 15.914 9.25 15.4998 9.25C15.0855 9.25 14.7498 9.58579 14.7498 10H16.2498ZM14.7498 11C14.7498 11.4142 15.0855 11.75 15.4998 11.75C15.914 11.75 16.2498 11.4142 16.2498 11H14.7498ZM10.2498 10C10.2498 9.58579 9.91397 9.25 9.49976 9.25C9.08554 9.25 8.74976 9.58579 8.74976 10H10.2498ZM8.74976 11C8.74976 11.4142 9.08554 11.75 9.49976 11.75C9.91397 11.75 10.2498 11.4142 10.2498 11H8.74976ZM15.4998 7.25H9.49976V8.75H15.4998V7.25ZM14.7498 10V11H16.2498V10H14.7498ZM8.74976 10V11H10.2498V10H8.74976Z" fill="#000000"></path> </g></svg>
                        </div>
                    </div>
                </div>`;
});
document.querySelector(".new-collection-top").innerHTML = newCollectionHtml1;

newCollection.slice(3, newCollection.length).forEach((collection) => {
  newCollectionHtml2 += `<div class="new-collection-item">
                    <p class="tag">${collection.rateTag}</p>
                    <img class="item-image" src="${collection.image}" alt="">
                    <div class="name-price-svg">
                        <div class="name-price">
                            <p class="item-name">${collection.name}</p>
                            <p class="item-price">$${collection.price.toFixed(
                              2
                            )}</p>
                        </div>
                        <div class="shop-svg">
                           <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4308 12L18.4408 16C17.6168 18.913 16.9408 19.748 15.4698 19.946C15.1413 19.9859 14.8106 20.0039 14.4798 20H10.5198C10.1889 20.0039 9.85819 19.9859 9.52975 19.946C8.06375 19.746 7.38275 18.913 6.55875 16L5.56875 12C5.07575 9.014 7.32175 8.009 9.49975 8V7.125C9.46572 5.43382 10.8086 4.03499 12.4998 4C14.1909 4.03499 15.5338 5.43382 15.4998 7.125V8C17.6778 8.009 19.9228 9.013 19.4308 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.4998 8.75C15.914 8.75 16.2498 8.41421 16.2498 8C16.2498 7.58579 15.914 7.25 15.4998 7.25V8.75ZM9.49976 7.25C9.08554 7.25 8.74976 7.58579 8.74976 8C8.74976 8.41421 9.08554 8.75 9.49976 8.75V7.25ZM16.2498 10C16.2498 9.58579 15.914 9.25 15.4998 9.25C15.0855 9.25 14.7498 9.58579 14.7498 10H16.2498ZM14.7498 11C14.7498 11.4142 15.0855 11.75 15.4998 11.75C15.914 11.75 16.2498 11.4142 16.2498 11H14.7498ZM10.2498 10C10.2498 9.58579 9.91397 9.25 9.49976 9.25C9.08554 9.25 8.74976 9.58579 8.74976 10H10.2498ZM8.74976 11C8.74976 11.4142 9.08554 11.75 9.49976 11.75C9.91397 11.75 10.2498 11.4142 10.2498 11H8.74976ZM15.4998 7.25H9.49976V8.75H15.4998V7.25ZM14.7498 10V11H16.2498V10H14.7498ZM8.74976 10V11H10.2498V10H8.74976Z" fill="#000000"></path> </g></svg>
                        </div>
                    </div>
                </div>`;
});

document.querySelector(".new-collection-down").innerHTML = newCollectionHtml2;

const reviews = [
  {
    profilePicture:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
    itemImage: "./images/sofa (1).png",
    commentTitle: "Smooth shopping experience",
    commentSubtitle:
      "the website was easy to navigate on time and well-packaged",
    rate: 4.3,
    customerName: "Jenny Wilson",
    customerTitle: "cfo,gillite",
  },
  {
    profilePicture:
      "https://th.bing.com/th/id/OIP.UidYXknATm9TVaVDAEDm6AHaE8?w=208&h=139&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    itemImage: "./images/sofa (2).png",
    commentTitle: "Smooth shopping experience",
    commentSubtitle:
      "the website was easy to navigate on time and well-packaged",
    rate: 4.3,
    customerName: "leslie Alexender",
    customerTitle: "cfo,gillite",
  },
  {
    profilePicture:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    itemImage: "./images/sofa (3).png",
    commentTitle: "Smooth shopping experience",
    commentSubtitle:
      "the website was easy to navigate on time and well-packaged",
    rate: 4.3,
    customerName: "Esther Howard",
    customerTitle: "cfo,gillite",
  },
  {
    profilePicture:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    itemImage: "./images/sofa (4).png",
    commentTitle: "Smooth shopping experience",
    commentSubtitle:
      "the website was easy to navigate on time and well-packaged",
    rate: 4.3,
    customerName: "Robert Fox",
    customerTitle: "cfo,gillite",
  },
  {
    profilePicture:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    itemImage: "./images/sofa (5).png",
    commentTitle: "Smooth shopping experience",
    commentSubtitle:
      "the website was easy to navigate on time and well-packaged",
    rate: 4.3,
    customerName: "Kristin Watson",
    customerTitle: "cfo,gillite",
  },
  {
    profilePicture:
      "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg",
    itemImage: "./images/sofa (6).png",
    commentTitle: "Smooth shopping experience",
    commentSubtitle:
      "the website was easy to navigate on time and well-packaged",
    rate: 4.3,
    customerName: "Cameron Williamson",
    customerTitle: "cfo,gillite",
  },
];
let reviewHtml1 = "";
let reviewHtml2 = "";
reviews.slice(0, 3).forEach((review) => {
  reviewHtml1 += ` <div class="review-card">
                    <div class="customer-info-rate">
                        <div class="customer-info">
                            <div class="customer-profile">
                            <img src="${review.profilePicture}">
                            
                            </div>
                            <div class="customer-name-title">
                                <p class="customer-name">${review.customerName}</p>
                                <p class="customer-title">${review.customerTitle.slice(0,3).toUpperCase() + review.customerTitle.slice(3,review.commentTitle.length)}</p>
                            </div>
                        </div>
                         <div class="rate">
                            <div class="star">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZvW8bdRzGf1Q09r357MT3YikTZSgIwdAWCZA6MYBQ/oIKykCHDlUZujcUlQ2pVMAYJFQQUgckhKCxHb/cxU7sOunZvoiKdkCZUFGGVlS0gd/vQXcXv9upae4SG/mRnsny3ef5+vHd92xCJppoosAEW3sVdf0EGUfB0lTY2kPXlqaScRPq2jxsHag71ubJOAm/Ph+Crf+OuubAAzX1HoqzHBkXwU6cacHvuKp+QMZBAHkGNXWjCV5THXjAUm87r5FRF6r6221Tb8ADluL4LTLqQk1L9YW/pQDr8UUyyoKlvQRLZX3hvQDAuvIKGVXBUr/qqkwXfByozCyQkb1xWcpfPVNvh19zAkw/QiWeIKMmWMrH/SvTBr8243wCji+RURKKsxys+B994RvgLXjg5vQWLE04uOu8reioxY/B0uZgKWdhKdcGVqYd3IP3XJ6+hlLsLMrROazKx1BSdF/uE6grR7Chn4SdOIW6fgE1/Qpq6nVUtQKq6iaq6vbuV5kB8A1wDx4ox4CSZ7YadU1Xotu0KG/SFblAi5HrtBi5goJ0AcuRUyiIJ2HKz+0Ov5H4yF3AWktY9zrQfWMatjKd4H3g2UrDMlhxx4WI5+WGJcAQLw4OYOunUddZE757Heg39eEr0wHeCy+3wHvgJTBTAjUkBlN67wkV0t9FXdvumXoAlWH94Bvg3fCm9A8M8cxw34Oa+iaq2oNRqAxzJy8+RF56Zyj4Zoh1/QSqyr2DrAzz4LdgiG/8J/hWnZQjsOJ3DqIyzIHPi78hKx59KvhmCOf6vB6/5U9l5KEqwzx4G1ludk/wzRC2ImItntyPyjAXXsghFZN9ge94zq3MfBdkZZghOvDfo0i44NaIysynQVSGOfCG+DlADgUC3xGkHLvqZ2WYO3nxauDgzQCl2Cd+VYbtmOaFy/sXoBxb8qMyzHHeM83x6f2BBzmEUvT+XivTghfAcgJoln+Ai/vR/9XpF/dcmXwnPHOc5YGc+ELwAVbk9/2oTBM858G7ATL86cAD0FX5Sz8q44ELTXiW4UGXwl8EH6AYrfhVGbYD7pkDTYdvBgqPLAnTovx44NQ7dhlhC4ZwDlnhHM0JW/0qwxrwS5xrusQ9ds4RXICC9PoT19+8RGle/BoFofmnBkw5RrP8ZzQj/N0JzzXhWdpxGEiFXwsuQFH+cNf11xAzMISXB74/Kx6lGe6nXviw51QYSE6dDywAXZa+7QtuSpsw+d2fVduDpLk5mubudsM7pouhb4ILUJDudj6nin/SvDT/NL1FhRxGeuo8TYfve/AhsGQINDl1JxB4t8dmhDnw1JAoNcUF5Pk9/8aJn/kETU0t0GSIugFuhBh+JDF/qNtPtKgJ1BBvU1PKYTly3PfjJ589Tm9M5eji4V/wA+H9Pv5EE/1f9S9M4cKBWKiMUAAAAABJRU5ErkJggg==" alt="star--v1">
                            </div>
                            <p class="rate-number">${review.rate}</p>
                          </div>
                      </div>
                        <div class="review-image-container">
                            <img src="${review.itemImage}" alt="">
                        </div>
                        <div class="comments-title-sub">
                            <p class="customer-comment-title">${review.commentTitle}</p>
                            <p class="customer-subtitle">${review.commentSubtitle}</p>
                        </div>
                </div>`;
});
reviews.slice(3, 6).forEach((review) => {
  reviewHtml2 += ` <div class="review-card">
                    <div class="customer-info-rate">
                        <div class="customer-info">
                            <div class="customer-profile">
                            <img src="${review.profilePicture}">
                            
                            </div>
                            <div class="customer-name-title">
                                <p class="customer-name">${review.customerName}</p>
                                <p class="customer-title">${review.customerTitle.slice(0,3).toUpperCase() + review.customerTitle.slice(3,review.commentTitle.length)}</p>
                            </div>
                        </div>
                         <div class="rate">
                            <div class="star">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZvW8bdRzGf1Q09r357MT3YikTZSgIwdAWCZA6MYBQ/oIKykCHDlUZujcUlQ2pVMAYJFQQUgckhKCxHb/cxU7sOunZvoiKdkCZUFGGVlS0gd/vQXcXv9upae4SG/mRnsny3ef5+vHd92xCJppoosAEW3sVdf0EGUfB0lTY2kPXlqaScRPq2jxsHag71ubJOAm/Ph+Crf+OuubAAzX1HoqzHBkXwU6cacHvuKp+QMZBAHkGNXWjCV5THXjAUm87r5FRF6r6221Tb8ADluL4LTLqQk1L9YW/pQDr8UUyyoKlvQRLZX3hvQDAuvIKGVXBUr/qqkwXfByozCyQkb1xWcpfPVNvh19zAkw/QiWeIKMmWMrH/SvTBr8243wCji+RURKKsxys+B994RvgLXjg5vQWLE04uOu8reioxY/B0uZgKWdhKdcGVqYd3IP3XJ6+hlLsLMrROazKx1BSdF/uE6grR7Chn4SdOIW6fgE1/Qpq6nVUtQKq6iaq6vbuV5kB8A1wDx4ox4CSZ7YadU1Xotu0KG/SFblAi5HrtBi5goJ0AcuRUyiIJ2HKz+0Ov5H4yF3AWktY9zrQfWMatjKd4H3g2UrDMlhxx4WI5+WGJcAQLw4OYOunUddZE757Heg39eEr0wHeCy+3wHvgJTBTAjUkBlN67wkV0t9FXdvumXoAlWH94Bvg3fCm9A8M8cxw34Oa+iaq2oNRqAxzJy8+RF56Zyj4Zoh1/QSqyr2DrAzz4LdgiG/8J/hWnZQjsOJ3DqIyzIHPi78hKx59KvhmCOf6vB6/5U9l5KEqwzx4G1ludk/wzRC2ImItntyPyjAXXsghFZN9ge94zq3MfBdkZZghOvDfo0i44NaIysynQVSGOfCG+DlADgUC3xGkHLvqZ2WYO3nxauDgzQCl2Cd+VYbtmOaFy/sXoBxb8qMyzHHeM83x6f2BBzmEUvT+XivTghfAcgJoln+Ai/vR/9XpF/dcmXwnPHOc5YGc+ELwAVbk9/2oTBM858G7ATL86cAD0FX5Sz8q44ELTXiW4UGXwl8EH6AYrfhVGbYD7pkDTYdvBgqPLAnTovx44NQ7dhlhC4ZwDlnhHM0JW/0qwxrwS5xrusQ9ds4RXICC9PoT19+8RGle/BoFofmnBkw5RrP8ZzQj/N0JzzXhWdpxGEiFXwsuQFH+cNf11xAzMISXB74/Kx6lGe6nXviw51QYSE6dDywAXZa+7QtuSpsw+d2fVduDpLk5mubudsM7pouhb4ILUJDudj6nin/SvDT/NL1FhRxGeuo8TYfve/AhsGQINDl1JxB4t8dmhDnw1JAoNcUF5Pk9/8aJn/kETU0t0GSIugFuhBh+JDF/qNtPtKgJ1BBvU1PKYTly3PfjJ589Tm9M5eji4V/wA+H9Pv5EE/1f9S9M4cKBWKiMUAAAAABJRU5ErkJggg==" alt="star--v1">
                            </div>
                            <p class="rate-number">${review.rate}</p>
                          </div>
                      </div>
                        <div class="review-image-container">
                            <img src="${review.itemImage}" alt="">
                        </div>
                        <div class="comments-title-sub">
                            <p class="customer-comment-title">${review.commentTitle}</p>
                            <p class="customer-subtitle">${review.commentSubtitle}</p>
                        </div>
                </div>`;
});
document.querySelector(".review-top").innerHTML = reviewHtml1;
document.querySelector(".review-down").innerHTML = reviewHtml2;


document.querySelectorAll(".faq-question-container").forEach((faq) => {
  faq.addEventListener("click", () => {
    // Close other open FAQs (optional)
    document
      .querySelectorAll(".faq-question-container.active")
      .forEach((openFaq) => {
        if (openFaq !== faq) openFaq.classList.remove("active");
      });

    // Toggle current
    faq.classList.toggle("active");
  });
});
