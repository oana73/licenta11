import CouponForm from "@/components/backoffice/Forms/CouponsForm";
import HeaderForm from "@/components/backoffice/HeaderForm";

export default function newCoupon() {
  return (
    <div>
      <HeaderForm title="New Coupon" />
      <CouponForm/>
    </div>
  )
}
