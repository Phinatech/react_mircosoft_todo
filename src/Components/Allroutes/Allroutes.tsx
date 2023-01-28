import react  from "react"
import { useRoutes } from "react-router-dom"
import Assigned from "../Assigned/Assigned"
import Impotant from "../important/Impotant"
import MyDay from "../my day/MyDay"
import Planned from "../planned/Planned"
import Taskpage2 from "../Task/Taskpage2"

const Allroutes = ()=>{
      let elements = useRoutes([
        {
          path:"/myday",
          element:<MyDay/>
        },
        {
          path:"/task",
          element:<Taskpage2/>
        },
        {
          path:"/planned",
          element:<Planned/>
        },
        {
          path:"/important",
          element:<Impotant/>
        },
        {
          path:"/assigned",
          element:<Assigned/>
        }
      ]);
      return elements
}

export default Allroutes