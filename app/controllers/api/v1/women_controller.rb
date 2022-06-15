class Api::V1::WomenController < ApplicationController
  before_action :set_woman, only: %i[ show update destroy ]

  # GET /women
  def index
    @women = Woman.all

    render json: @women
  end

  # GET /women/1
  def show
    render json: @woman
  end

  # POST /women
  def create
    @woman = Woman.new(woman_params)

    if @woman.save
      render json: @woman, status: :created, location: @woman
    else
      render json: @woman.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /women/1
  def update
    if @woman.update(woman_params)
      render json: @woman
    else
      render json: @woman.errors, status: :unprocessable_entity
    end
  end

  # DELETE /women/1
  def destroy
    @woman.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_woman
      @woman = Woman.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def woman_params
      params.require(:woman).permit(:name, :business, :telephone, :email, :address, :social, :body)
    end
end
