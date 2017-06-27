
var contactModal = $('.contact-modal'),
    contactModalTrigger = $('.open-contact-modal'),
   
    manlyCollectionModel = $('.manly-collection-modal'),
    manlyCollectionModalTrigger = $('.open-manly-collection-modal'),
    
    closeModalBtn = $('.close-modal');


var modals = {
    allModals : function(modal, modalTrigger){
          $(modalTrigger,this).on('click',function(){
            $(modal,this).addClass('modal-is-visible');
            return false;
        })
    },
    
    closeModal: function(){
        closeModalBtn.on('click',function(){
            $(this).closest('.modal').removeClass('modal-is-visible');
        });
    }
}

modals.allModals(contactModal, contactModalTrigger);
modals.allModals(manlyCollectionModel, manlyCollectionModalTrigger);
modals.closeModal();
