// import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Bike Rental System",
      description: `Developed a comprehensive console-based application to manage the lifecycle of bike rentals efficiently. 
      The application features modules for bike registration, rental management, payment calculations, and customer 
      information handling. Utilizing Java's Object-Oriented Programming (OOP) principles, the application is modular, 
      easy to maintain, and scalable. The Collections framework was extensively used for managing dynamic data like 
      bike inventories, customer details, and rental transactions.`,
      features: [
        "Real-time bike availability tracking.",
        "Automated calculation of rental fees based on duration.",
        "Comprehensive customer and rental history management.",
      ],
      technologies:
        "Java, Object-Oriented Programming (OOP), Collections Framework",
    },
    {
      name: "Parking System Web Application",
      description: `Built a dynamic web application aimed at automating parking lot operations, including slot reservations, 
      user management, and real-time parking space monitoring. The system allows users to search for available parking 
      slots, reserve spaces online, and view reservation histories. Administrators can manage slot availability, bookings, 
      and parking space details efficiently through a user-friendly interface.`,
      features: [
        "Intuitive dashboard for slot availability and status updates.",
        "Reservation management with email notifications.",
        "Secure user authentication and role-based access control.",
      ],
      technologies:
        "ASP.Net Core MVC, C#, Entity Framework Core, SQL Server, Bootstrap, jQuery",
    },
    {
      name: "Hostel Management System",
      description: `Designed and implemented a web-based application to simplify hostel management processes. This system enables 
      students to register for accommodation, browse available room options, and manage their personal accounts seamlessly. 
      Administrators can manage room assignments, track occupancy, and generate detailed reports. The application focuses on 
      delivering an easy-to-navigate interface and efficient backend functionality to enhance the user experience.`,
      features: [
        "Room browsing and filtering based on availability and type.",
        "Online student registration and payment tracking.",
        "Account management with personalized dashboards.",
      ],
      technologies: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <h6>Key Features:</h6>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Technologies Used:</strong> {project.technologies}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
