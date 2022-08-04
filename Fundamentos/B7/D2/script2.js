const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const entries = Object.entries(order);
    const adressKeys = Object.keys(entries[2][1]);

    return `Olá ${entries[0][1]}, Telefone: ${entries[1][1]}, R. ${entries[2][1][adressKeys[0]]}, Nº: ${entries[2][1][adressKeys[1]]}, AP: ${entries[2][1][adressKeys[2]]}`;

  }
  
//   console.log( customerInfo(order) );
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const entries = Object.entries(order);
    const pizzaKeys = Object.keys(entries[3][1]['pizza']);
    const drink = Object.entries(entries[3][1]['drinks']['coke']);
    const payment = Object.values(entries[4][1]);
    
    return `Olá ${entries[0][1]}, o total do seu pedido de ${pizzaKeys[0]}, ${pizzaKeys[1]} e ${drink[0][1]} é R$ ${payment},00.`;

  }
  
  console.log( orderModifier(order) );