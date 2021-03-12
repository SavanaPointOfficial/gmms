export const HealthCare = () => {
    const cards = [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: "Atendimento Médico Domiciliar",
        
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1611072244465-8370e9fffe5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
        title: "Enfermagem Domiciliar",
        
        rating: "4.5",
        reviews: "34",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title: "Internação Domiciliar",
       
        rating: "3.9",
        reviews: "26",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
        title: "Acompanhante Para Consultas",
        
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80",
        title: "Remoção de Pacientes",
        
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1576765974497-b41831d52f83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=757&q=80",
        title: "Cuidador de Idosos",
       
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Nutricionistas",
       
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc:
          "https://res.cloudinary.com/savanapoint/image/upload/v1615413678/idoso-home-care_t3bmrl.jpg",
        title: "Fonoaudiologia Domiciliar",
        
        rating: "4.2",
        reviews: "19",
        url: "#"
      }
    ];
  
    // Shuffle array
    return cards.sort(() => Math.random() - 0.5);
  };
  