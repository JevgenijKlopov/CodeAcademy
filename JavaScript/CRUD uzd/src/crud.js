const dataApi = 'https://pewter-mint-spring.glitch.me';
export const fetchData = async () => {
    try {
      const response = await fetch(dataApi);
      if (response.ok) {
        // console.log(response)
        return await response.json();        
      }
    } catch (error) {
      console.error(error);
    }
  }