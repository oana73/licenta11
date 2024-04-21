import NewSliderForm from "@/components/backoffice/Forms/NewSliderForm";
import HeaderForm from "@/components/backoffice/HeaderForm";

export default function newSlider() {
  return (
    <div>
      <HeaderForm title="New Slider" />
      <NewSliderForm/>   
    </div>
  )
}
