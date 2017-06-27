
var contactModal = $('.contact-modal'),
    contactModalTrigger = $('.open-contact-modal'),
   
    projectModal = $('.project-modal'),
    projectModalTrigger = $('.open-project-modal'),
    
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
modals.allModals(projectModal, projectModalTrigger);
modals.closeModal();
