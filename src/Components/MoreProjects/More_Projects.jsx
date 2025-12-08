import React from 'react'
import ProjectDivisionGrid from '../ComponentPage/ProjectDivisionGrid';

const More_Projects = () => {



  return (
    <div>
      <div className="w-full text-white overflow-hidden">
        
        <div className="w-full h-full !mt-20 ">
           <ProjectDivisionGrid  />
        </div>

      </div>
    </div>
  );
};

export default More_Projects;






// "use client"

// import * as React from "react"
// import { ChevronDownIcon } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export function More_Projects() {
//   const [open, setOpen] = React.useState(false)
//   const [date, setDate] = React.useState<Date | undefined>(undefined)

//   return (
//     <div className="flex gap-4">
//       {/* DATE PICKER */}
//       <div className="flex flex-col gap-3">
//         <Label htmlFor="date-picker" className="px-1">Date</Label>

//         <Popover open={open} onOpenChange={setOpen}>
//           <PopoverTrigger asChild>
//             <Button
//               variant="outline"
//               id="date-picker"
//               className="w-32 justify-between font-normal"
//             >
//               {date ? date.toLocaleDateString() : "Select date"}

//               {/* Animated Chevron */}
//               <motion.div
//                 animate={{ rotate: open ? 180 : 0 }}
//                 transition={{ duration: 0.25, ease: "easeOut" }}
//               >
//                 <ChevronDownIcon />
//               </motion.div>
//             </Button>
//           </PopoverTrigger>

//           <PopoverContent
//             className="w-auto overflow-hidden p-0"
//             align="start"
//           >
//             <AnimatePresence>
//               {open && (
//                 <motion.div
//                   key="calendar"
//                   initial={{ opacity: 0, y: -6, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -6, scale: 0.98 }}
//                   transition={{ duration: 0.22, ease: "easeOut" }}
//                 >
//                   <Calendar
//                     mode="single"
//                     selected={date}
//                     captionLayout="dropdown"
//                     onSelect={(d) => {
//                       setDate(d)
//                       setOpen(false)
//                     }}
//                   />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </PopoverContent>
//         </Popover>
//       </div>

//       {/* TIME PICKER */}
//       <div className="flex flex-col gap-3">
//         <Label htmlFor="time-picker" className="px-1">Time</Label>

//         <Input
//           type="time"
//           id="time-picker"
//           step="1"
//           defaultValue="10:30:00"
//           className="
//             bg-background appearance-none
//             [&::-webkit-calendar-picker-indicator]:hidden
//             [&::-webkit-calendar-picker-indicator]:appearance-none
//           "
//         />
//       </div>
//     </div>
//   )
// }


