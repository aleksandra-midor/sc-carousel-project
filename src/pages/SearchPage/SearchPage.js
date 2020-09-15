import React, { useState, useContext } from "react";
import flickr from "../../apiKeys";
import ThumbsGallery from "../../components/ThumbsGallery/ThumbsGallery";
import "./SearchPage.scss";
import IsLoadingContext from "../../Context/IsLoadingContext";
import PictureModal from "../../components/PictureModal/PictureModal";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fetchedData, setFetchedData] = useState({});
  const [showGallery, setShowGallery] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState();

  console.log(fetchedData, searchInput);

  const spinner = useContext(IsLoadingContext);

  const handleSubmit = () => {
    spinner.setLoading(true);
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickr.key}&tags=${searchInput}&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        spinner.setLoading(false);
        if (data.stat === "ok") {
          setFetchedData(data);
          if (data.photos.total !== "0") {
            setShowGallery(true);
          }
        } else {
          console.error(data);
        }
      });
  };

  return (
    <main className="SearchPage">
      <article
        className={`SearchPage_Search ${
          !showGallery ? "SearchPage_Search-fullHeight" : ""
        }`}
      >
        <div className="Search">
          <label>
            What pictures are you looking for?
            <input
              value={searchInput}
              type="text"
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSubmit();
                }
              }}
            ></input>
          </label>

          <button disabled={searchInput === ""} onClick={handleSubmit}>
            Search
          </button>
        </div>
      </article>

      <article className="SearchPage_Gallery">
        {showGallery && (
          <ThumbsGallery
            data={fetchedData.photos.photo}
            kupa={setShowModal}
            setPicture={setSelectedPicture}
          ></ThumbsGallery>
        )}
      </article>
      {fetchedData.photos && (
        <PictureModal
        visible={showModal}
        setVisible={setShowModal}
        selectedPicture={selectedPicture}
        setSelectedPicture={setSelectedPicture}
        allPictures={fetchedData.photos.photo}

      ></PictureModal>
      )}
      <article></article>
    </main>
  );
};
export default SearchPage;
