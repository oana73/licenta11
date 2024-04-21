import NewCategoryForm from "@/components/backoffice/Forms/NewCategoryForm";
import HeaderForm from "@/components/backoffice/HeaderForm";

export default function newCategory() {
  return (
    <div>
      <HeaderForm title="New Category" />
      <NewCategoryForm/>
    </div>
  )
}
