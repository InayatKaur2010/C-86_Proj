var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        Block_image_object = Img;

        Block_image_object.scaleToWidth(700);
        Block_image_object.scaleToHeight(510);
        Block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(Block_image_object);
    })
}

function playSound(){
	x.play();
}
