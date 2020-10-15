/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';

const GalleryOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .9);
  display: block;
`;

const GalleryPopup = styled.div`
  position: absolute;
  width: 30rem;
  right: 62px;
  left: 0;
  top: 45px;
  margin: auto;
  border-color: rgba(0,0,0,.0784314);
  border-style: solid;
  border-width: .67px;
  border-radius: 3px;
  background-color: transparent;
  padding-bottom: 16px;
`;

const ScrollerContainer = styled.div`
  width: 100%;
  // overflow: hidden;
  position: static;
  // margin: 0;
  margin-left: 30px;
  padding: 0;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: calc(500px - 64px);
  margin: 0 auto;
  align-self: center;
  border-style: none;
`;

const DescriptionFooter = styled.div`
  position: relative;
  margin: 8px 0 0;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const FooterText = styled.div`
  float: left:
  max-width: 90%;
  margin: 0 8px 0 0;
  display: block;
  line-height: 1.15;
`;

const LeftScroll = styled.button`
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 50%;
  left: -5%;
  background-color: transparent;
  border: none;
  background: url(https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/Icons/left_scroll.svg);
  height: 16px;
  width: 16px;
`;

const RightScroll = styled.button`
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 50%;
  right: -17%;
  background-color: transparent;
  border: none;
  background: url(https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/Icons/right_scroll.svg);
  height: 16px;
  width: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  padding: 25px;
  right: -20px;
  top: 30px;
  overflow: visible;
  background: url(https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/Icons/close_icon.svg);
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 15px;
  border: none;
`;

const PhotoModal = ({ showModal, toggleModal, photos }) => {
  if (showModal) {
    return (
      <GalleryOverlay>
        <GalleryPopup>
          {/* <GalleryScroller> */}
          <LeftScroll type="button" aria-label="Previous Image"></LeftScroll>
          <ScrollerContainer>
            <ImageContainer>
              <Image src={photos[0].url_path}></Image>
            </ImageContainer>
            <DescriptionFooter>
              <div>
                <FooterText>{`${photos[3].description}`}</FooterText>
                <FooterText>
                  {`Dined On ${photos[3].date}`}
                </FooterText>
              </div>
            </DescriptionFooter>
          </ScrollerContainer>
          <RightScroll type="button" aria-label="Next Image"></RightScroll>
          {/* </GalleryScroller> */}
        </GalleryPopup>
        <CloseButton onClick={toggleModal} aria-label="Close"></CloseButton>
      </GalleryOverlay>
    );
  }
  return (
    <div></div>
  );
};

export default PhotoModal;
