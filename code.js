var image = null;
var canvas = document.getElementById("upload-canvas");


function uploadimgcheck()
{
    if(image==null || !image.complete())
        {
            alert("Image is not Yet Uploaded");
        }
}
function upload()
{
    var file = document.getElementById("file-upload");
    image = new SimpleImage(file);
    image.drawTo(canvas);
}
function grayscale()
{
    uploadimgcheck();
    for(var pixel of image.values())
        {
            var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
    image.drawTo(canvas);
}
function red()
{
    uploadimgcheck();
    for( var pixel of image.values())
        {
            pixel.setRed(255);
        }
    image.drawTo(canvas)
}
function rainbow()
{
    uploadimgcheck();
    for(var pixel of image.values())
        {
            var height = image.getHeight()
            if(pixel.getY()<height*(1/7))
                {
                    pixel.setRed(255);
                }
            if(pixel.getY()>height*(1/7) && pixel.getY()<height*(2/7))
                {
                    pixel.setRed(255);
                    pixel.setGreen(128);                    
                }
            if(pixel.getY()>height*(2/7) && pixel.getY()<height*(3/7))
                {
                    pixel.setRed(255);
                    pixel.setGreen(255);
                }
            if(pixel.getY()>height*(2/7) && pixel.getY()<height*(3/7))
                {
                    pixel.setRed(255);
                    pixel.setGreen(255);
                }      
            if(pixel.getY()>height*(3/7) && pixel.getY()<height*(4/7))
                {
                    pixel.setGreen(255);
                }
            if(pixel.getY()>height*(4/7) && pixel.getY()<height*(5/7))
                {
                    pixel.setBlue(255);
                    pixel.setGreen(255);
                }               
            if(pixel.getY()>height*(5/7) && pixel.getY()<height*(6/7))
                {
                    pixel.setBlue(255);
                }                
            if(pixel.getY()>height*(6/7))
                {
                    pixel.setRed(128);
                    pixel.setBlue(255);
                }
        }
    image.drawTo(canvas);
}
function reset()
{
    uploadimgcheck();
    upload();
}
