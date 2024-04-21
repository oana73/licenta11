import CouponForm from '@/components/backoffice/Forms/CouponsForm'
import HeaderForm from '@/components/backoffice/HeaderForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function UpdateCoupon({params:{id}}) {
  const coupon = await getData(`coupons/${id}`)
  return (
    <div>
      <HeaderForm title="Update Coupon" />
      <CouponForm updateData={coupon} />
    </div>
  )
}
