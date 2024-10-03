const testimonials = [
    {
        name: "Alice Johnson",
        photo: "https://randomuser.me/api/portraits/women/1.jpg",
        testimonial: "This service is fantastic! Highly recommend it to everyone."
    },
    {
        name: "Bob Smith",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        testimonial: "An amazing experience! I will definitely use this again."
    },
    {
        name: "Charlie Brown",
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        testimonial: "Excellent customer support and quick service."
    },
    {
        name: "Diana Prince",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        testimonial: "I love the user-friendly interface and the quality of the product."
    },
];

let currentIndex = 0;

function showTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById("customer-photo").src = testimonial.photo;
    document.getElementById("customer-name").innerText = testimonial.name;
    document.getElementById("customer-testimonial").innerText = testimonial.testimonial;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

document.getElementById("next-btn").addEventListener("click", nextTestimonial);
document.getElementById("prev-btn").addEventListener("click", prevTestimonial);

// Show the first testimonial on load
showTestimonial(currentIndex);
