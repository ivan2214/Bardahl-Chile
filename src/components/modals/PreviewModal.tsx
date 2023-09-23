'use client'

import usePreviewModal from '@/hooks/usePreviewModal'

import { Dialog, DialogContent } from '../ui/dialog'
import { useCallback, useEffect, useState } from 'react'

const PreviewModal = () => {
  const previewModal = usePreviewModal()
  const data = usePreviewModal((state) => state.data)

  const [showModal, setShowModal] = useState(previewModal.isOpen)

  useEffect(() => {
    setShowModal(previewModal.isOpen)
  }, [previewModal.isOpen])

  const onToggle = useCallback(() => {
    previewModal.onClose()
  }, [previewModal])

  if (!data) return null
  console.log(data)

  return (
    <Dialog open={showModal} onOpenChange={onToggle}>
      <DialogContent>
        <section className="mx-auto h-full w-full">
          <img
            alt="ecommerce"
            className="h-full w-full rounded object-cover object-center hover:scale-110 transition-transform"
            src={data || 'https://via.placeholder.com/450x450'}
          />
        </section>
      </DialogContent>
    </Dialog>
  )
}

export default PreviewModal
