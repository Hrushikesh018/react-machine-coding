import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Contact from './pages/Contact.jsx'
// import Stepper from './pages/Stepper.jsx'
// import ReactToastr from './pages/CodingQuestions/ReactToastr.jsx'
// import Todo from './pages/CodingQuestions/Todo.jsx'
// // import Accordian from './pages/CodingQuestions/Accordian.jsx'
// import AutoComplete from './pages/CodingQuestions/AutoComplete.jsx'
// import Signup from './pages/CodingQuestions/Signup.jsx'
// import Table from './pages/CodingQuestions/TableComponent.jsx'
// import TransferList from './pages/CodingQuestions/TransferList.jsx'
import ProgressBar from './pages/Phase1/ProgressBar.jsx'
import Tabs from './pages/Phase1/Tabs.jsx'
// import Accordian from './pages/Phase1/Accordian.jsx'
import StarRatingComponent from './pages/Phase1/StarRatingComponent.jsx'
import Modal from './pages/Phase1/Modal.jsx'
import Notification from './pages/Phase1/Notification.jsx'
import Stepper from './pages/Phase1/Stepper.jsx'
import ImageCarousel from './pages/Phase1/ImageCarousel.jsx'
import PProgressBar from './pages/Phase2/PracticeProgressBar.jsx'
import PracticeToast from './pages/Phase2/PracticeToast.jsx'
import PracticeModal from './pages/Phase2/PracticeModal.jsx'
import PracticeStepper from './pages/Phase2/PracticeStepper.jsx'
import PracticeTodo2 from './pages/Phase2/PracticeTodo2.jsx'
import PracticeCarousel from './pages/Phase2/PracticeCarousel.jsx'
import PracticePasswordChecker from './pages/Phase2/PracticePasswordChecker.jsx'
import ReTodo from './pages/Phase3/ReTodo.jsx'
import ReModal from './pages/Phase3/ReModal.jsx'
import ReCarousel from './pages/Phase3/ReCarousel.jsx'
import ReAccordian from './pages/Phase3/ReAccordian.jsx'
import ReStepper from './pages/Phase3/ReStepper.jsx'
import Accordian from './pages/Accordian.jsx'
// import { items } from './pages/Utils.js'
import VirtualisedList from './pages/Advanced/VirtualisedList.jsx'
import SearchDebounce from './pages/Advanced/SearchDebounce.jsx'
import ClientSidePagination from './pages/Advanced/PaginationClientSide.jsx'
import SortedTable from './pages/Advanced/SortedTable.jsx'
import MultiSelectDropdown from './pages/Advanced/MultiSelect.jsx'
import ProductList from './pages/Advanced/ProductList.jsx'
import Test from './pages/ReUsable/Test.jsx'
import Search from './pages/ReUsable/debounce.jsx'
import MultipleTimers from './pages/ReUsable/MultipleTimers.jsx'
// import MultiSelectDropdown from './ReusableDropdown.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='progress' element={<ProgressBar/>}/>
          <Route path='tabs' element={<Tabs/>}/>
          <Route path='accordian' element={<Accordian/>}/>
          <Route path='star' element={<StarRatingComponent/>}/>
          <Route path='Modal' element={<Modal/>}/>
          <Route path='Notification' element={<Notification/>}/>
          <Route path='Stepper' element={<Stepper/>}/>
          <Route path='carousel' element={<ImageCarousel/>}/>
          <Route path='prog' element={<Test/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
