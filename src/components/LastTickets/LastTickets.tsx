import './LastTickets.css'
import LastTicket from "../LastTicket/LastTicket";

import { useLastRoutesQuery } from "../../utils/useLastRoutesQuery";

const LastTickets = () => {

  const {
    data: lastRoutes,
    isLoading: lastRoutesLoading,
    error: lastRoutesError,
  } = useLastRoutesQuery();

  if (lastRoutesLoading) {
    console.log('loading')
    return <div>Loading...</div>;
  }

  // console.log('lastRoutes', lastRoutes)
  return (
    <div className="last-tickets-container">
        <div className="last-tickets-title">Последние билеты</div>
        <div className="last-tickets-column">
          {
            lastRoutes.map((lastRoute, index) => (
              // console.log(lastRoute)
              <LastTicket key={index} lastRoute={lastRoute} />  
            ))
          }
                
        </div>
    </div>
  );
};

export default LastTickets;