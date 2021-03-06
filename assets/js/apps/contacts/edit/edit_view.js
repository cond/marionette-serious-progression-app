ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = ContactManager.ContactsApp.Common.Views.Form.extend({});
  _.extend(Edit.Contact.prototype, {
    onBeforeRender: function(){
      this.title = "Edit " + this.model.get("fullName");
    },

    onRender: function(){
      if(this.options && this.options.generateTitle){
        var $title = $('<h1>', { text: this.title });
        this.$el.prepend($title);
      }

      this.$(".js-submit").text("Update contact");
    }
  });
});
