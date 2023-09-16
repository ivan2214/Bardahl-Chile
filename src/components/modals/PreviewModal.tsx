'use client'

import usePreviewModal from '@/hooks/usePreviewModal'

import { Dialog, DialogContent } from '../ui/dialog'
import { useCallback, useEffect, useState } from 'react'

const PreviewModal = () => {
  const previewModal = usePreviewModal()
  const product = usePreviewModal((state) => state.data)

  const [showModal, setShowModal] = useState(previewModal.isOpen)

  useEffect(() => {
    setShowModal(previewModal.isOpen)
  }, [previewModal.isOpen])

  const onToggle = useCallback(() => {
    previewModal.onClose()
  }, [previewModal])

  if (!product) {
    return null
  }

  return (
    <Dialog open={showModal} onOpenChange={onToggle}>
      <DialogContent>
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5"></div>
          <div className="sm:col-span-8 lg:col-span-7"></div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PreviewModal
