const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    text: "I had the pleasure of working with Iqbal on a recent project, and I couldn't be more impressed with their skills and dedication. He possesses a remarkable ability to turn complex ideas into beautifully designed, functional websites. His attention to detail is truly commendable, and he consistently went above and beyond to meet our project's requirements and deadlines. What sets Iqbal apart is not only his technical expertise but also his excellent communication skills, making collaboration effortless. If you're seeking a web developer who combines creativity, technical prowess, and professionalism, Iqbal is undoubtedly the one to choose. I wholeheartedly recommend him for any web development project.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo:
      'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    text: 'Iqbal is a highly skilled web developer who is always willing to go the extra mile to ensure that his clients are satisfied. He is a great communicator and always keeps me updated on the progress of our projects. I highly recommend Iqbal for any web development project.',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo:
      'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    text: "Working with Iqbal has been an absolute game-changer for our online presence. He is a true web wizard who transformed our outdated website into a modern, user-friendly masterpiece. His technical proficiency and knack for creating visually appealing designs are second to none. What truly sets Iqbal apart, however, is his commitment to our project's success. He was always responsive, attentive, and eager to find creative solutions to any challenges that arose. Thanks to his expertise, our website now stands out in our industry. I can't recommend Iqbal enough for anyone in need of a web developer who delivers exceptional results and exceeds expectations.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo:
      'https://images.unsplash.com/photo-1594300084190-0c5b8d73a2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    text: 'I had the privilege of collaborating with Iqbal on a recent web development project, and I can confidently say that he is a true web development maestro. His ability to seamlessly blend aesthetics with functionality is nothing short of remarkable. Iqbal possesses an innate talent for crafting websites that not only look stunning but also deliver an exceptional user experience.',
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo:
      'https://images.unsplash.com/photo-1598650881919-14b6d763719d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    text: "Throughout our project, Iqbal demonstrated unwavering dedication and professionalism. He took the time to understand our unique needs and tailored the solution perfectly. His communication skills were top-notch, ensuring that we were always in the loop and our feedback was promptly incorporated. If you're searching for a web developer who can turn your vision into a reality and elevate your online presence, Iqbal is the expert you need. I wholeheartedly recommend him for any web development endeavor – he consistently delivers excellence.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
